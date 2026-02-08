/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BrikkleIconEditable from "@/assets/icons/brikkleIconEditable.svg?react";
import { Link } from "react-router-dom";
import { ChevronLeft, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useLogin } from "@/hooks/useApi";

const resetSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type ResetFormData = z.infer<typeof resetSchema>;

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ResetFormData>({
    resolver: zodResolver(resetSchema),
  });

  const {
    // mutateAsync,
    isSuccess,
    isError,
    data: userData,
    error,
    isPending,
  } = useLogin();

  const onSubmit = async (data: ResetFormData) => {
    // await mutateAsync(data);
    console.log(data);
    if (isSuccess) {
      //set user data in store
      console.log("user data", userData);
      // router.push('/dashboard')
      setTimeout(() => {
        reset();
      }, 3000);
    } else if (isError) {
      console.error("Waitlist submission error:", error);
      //show toast error
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Link
          to="/login"
          className="inline-flex items-center gap-2  hover:text-tertiary mb-8 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
          Go back
        </Link>

        <Card className="backdrop-blur-sm bg-card/95 border-none">
          <CardHeader className="text-center space-y-4  ">
            <div className="flex justify-center items-center  py-4">
              <div className="items-center justify-center text-primary dark:text-tertiary">
                <BrikkleIconEditable className="w-8 h-8 flex-shrink-0" />
              </div>
              <p className="text-xl sm:text-xl font-bold font-display truncate">
                Brikkle
              </p>
            </div>
            <div>
              <CardTitle className="text-2xl ">
                Let's recover your account
              </CardTitle>
              <CardDescription className="mt-2">
                Enter your email to recover your account
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                  <p className="text-sm text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isSubmitting || isPending}
              >
                {isSubmitting || isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Validating...
                  </>
                ) : (
                  "Continue"
                )}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                First time here?{" "}
                <Link
                  to="/signup"
                  className="text-foreground hover:text-tertiary font-medium"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ResetPassword;
