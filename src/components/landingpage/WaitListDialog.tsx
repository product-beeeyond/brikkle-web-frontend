import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/waitlistDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useJoinWaitlist } from "@/hooks/useApi";
import BrikkleIconEditable from "@/assets/icons/brikkleIconEditable.svg?react";
import { ResponsiveDialog } from "../ui/responsiveDialog";
import { toast } from "sonner";
// import { DrawerClose } from "../ui/drawer";
const waitlistSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

interface WaitlistDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function WaitlistDialog({
  open,
  onOpenChange,
}: WaitlistDialogProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const joinWaitlistMutation = useJoinWaitlist();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  });

  const onSubmit = async (data: WaitlistFormData) => {
    try {
      await joinWaitlistMutation.mutateAsync(data);

      setIsSuccess(true);

      // Reset form after success and close dialog
      setTimeout(() => {
        setIsSuccess(false);
        reset();
        onOpenChange(false);
      }, 3000);
    } catch {
      toast.error("Waitlist Submission Error", {
        position: "top-center",
        description: joinWaitlistMutation?.error?.message,
        action: {
          label: "Close",
          onClick: () => handleClose(),
        },
        // cancel: {
        //   label: "destruct",
        //   onClick: () => handleClose(),
        // },
      });
    }
  };

  const handleClose = () => {
    if (!isSubmitting && !joinWaitlistMutation.isPending) {
      setIsSuccess(false);
      // reset();
      onOpenChange(false);
    }
  };

  return (
    <ResponsiveDialog
      //       trigger={<Button>Confirm Action</Button>}
      open={open}
      onOpenChange={handleClose}
      headerContent={
        !joinWaitlistMutation.isSuccess && (
          <div className="items-center justify-center mx-auto text-primary dark:text-tertiary py-4">
            <BrikkleIconEditable className="w-10 h-10 flex-shrink-0" />
          </div>
        )
      }
      title={!joinWaitlistMutation.isSuccess ? " Join the Waitlist" : ""}
      description={
        !joinWaitlistMutation.isSuccess
          ? "Be among the first to own real estate from as little as ₦10k"
          : ""
      }
    >
      <AnimatePresence mode="wait">
        {!joinWaitlistMutation.isSuccess ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    {...register("firstName")}
                    className={errors.firstName ? "border-destructive" : ""}
                  />
                  {errors.firstName && (
                    <p className="text-xs text-destructive">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    {...register("lastName")}
                    className={errors.lastName ? "border-destructive" : ""}
                  />
                  {errors.lastName && (
                    <p className="text-xs text-destructive">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  // type="email"
                  placeholder="youremail@gmail.com"
                  {...register("email")}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-xs text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+234 801 234 5678"
                  {...register("phone")}
                />
              </div>
              <>
                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isSubmitting || joinWaitlistMutation.isPending}
                >
                  {isSubmitting || joinWaitlistMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Joining...
                    </>
                  ) : (
                    "Join the Waitlist"
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By joining, you agree to receive updates about Brikkle
                </p>
              </>
              {/* {joinWaitlistMutation.isError && (
                  <div className="bg-destructive/10 border border-destructive/20 rounded-md p-3">
                    <p className="text-sm text-destructive">
                      Failed to join waitlist. Please try again.
                    </p>
                  </div>
                )} */}
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="py-8"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <CheckCircle2 className="w-16 h-16 text-tertiary" />
              </motion.div>

              <div className="space-y-2">
                <h3 className="text-2xl font-display font-bold">
                  You're on the list! 🎉
                </h3>
                <p className="text-muted-foreground">
                  We'll notify you when Brikkle launches.
                  <br />
                  Check your email for exclusive updates.
                </p>
              </div>

              <div className="pt-4 w-full">
                <div className="bg-primary/10 rounded-lg p-4">
                  <p className="text-sm font-medium text-primary">
                    💎 Early Bird Bonus
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    First 1,000 members get exclusive perks
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ResponsiveDialog>
    // <Dialog open={open} onOpenChange={handleClose}>
    //   <DialogContent className="sm:max-w-md  bg-card/95 border-none">
    //     <button
    //       onClick={handleClose}
    //       disabled={isSubmitting || joinWaitlistMutation.isPending}
    //       className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none  focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
    //     >
    //       <X className="h-6 w-6" />
    //       <span className="sr-only">Close</span>
    //     </button>

    //   </DialogContent>
    // </Dialog>
  );
}
