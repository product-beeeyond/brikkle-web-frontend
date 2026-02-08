"use client";

import * as React from "react";
// import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  // DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useIsDesktop } from "@/hooks/useMediaQuery";
import { X } from "lucide-react";

interface ResponsiveDialogProps {
  trigger?: React.ReactNode;
  headerContent?: React.ReactNode;
  title: string;
  description?: string;
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: () => void;
  disabled?: boolean;
  showFooter?: boolean;
  footerContent?: React.ReactNode;
}

export function ResponsiveDialog({
  trigger,
  headerContent,
  title,
  description,
  disabled,
  children,
  open: controlledOpen,
  onOpenChange,
  showFooter = true,
  footerContent,
}: ResponsiveDialogProps) {
  const [internalOpen, setInternalOpen] = React.useState(false);
  const isDesktop = useIsDesktop();

  // Use controlled state if provided, otherwise use internal state
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setOpen = onOpenChange || setInternalOpen;

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
        <DialogContent className="sm:max-w-[425px] border-none">
          <button
            onClick={onOpenChange}
            disabled={disabled}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 hover:text-tertiary focus:outline-none  focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </button>
          <DialogHeader>
            {headerContent && headerContent}
            <DialogTitle className="text-2xl font-display text-center">
              {title}
            </DialogTitle>
            {description && (
              <DialogDescription className="text-center">
                {description}
              </DialogDescription>
            )}
          </DialogHeader>
          {children}
          {showFooter && (
            <DrawerFooter className="pt-2">
              {
                footerContent || null
                //  (
                //   <DrawerClose asChild>
                //     <Button variant="outline">Cancel</Button>
                //   </DrawerClose>
                // )
              }
            </DrawerFooter>
          )}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      {trigger && <DrawerTrigger asChild>{trigger}</DrawerTrigger>}
      <DrawerContent>
        <div className="px-4 scrollbar-hide overflow-y-auto  h-96">
          <button
            onClick={onOpenChange}
            disabled={disabled}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 hover:text-tertiary focus:outline-none  focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </button>
          <DrawerHeader className="text-left">
            {headerContent && headerContent}
            <DrawerTitle className="text-2xl font-display text-center">
              {title}
            </DrawerTitle>
            {description && (
              <DrawerDescription className="text-center">
                {description}
              </DrawerDescription>
            )}
          </DrawerHeader>
          {children}

          {showFooter && (
            <DrawerFooter className="pt-2">
              {
                footerContent || null
                //  (
                //   <DrawerClose asChild>
                //     <Button variant="outline">Cancel</Button>
                //   </DrawerClose>
                // )
              }
            </DrawerFooter>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}

//Example Usage
// Example 1: Profile Form
// export function ProfileEditDialog() {
//   return (
//     <ResponsiveDialog
//       trigger={<Button variant="outline">Edit Profile</Button>}
//       title="Edit profile"
//       description="Make changes to your profile here. Click save when you're done."
//     >
//       <ProfileForm />
//     </ResponsiveDialog>
//   )
// }

// // Example 2: Custom content with controlled state
// export function CustomDialog() {
//   const [open, setOpen] = React.useState(false)

//   return (
//     <ResponsiveDialog
//       trigger={<Button>Open Custom Dialog</Button>}
//       title="Custom Title"
//       description="This is a custom dialog"
//       open={open}
//       onOpenChange={setOpen}
//     >
//       <div className="space-y-4">
//         <p>Any custom content here</p>
//         <Button onClick={() => setOpen(false)}>Close</Button>
//       </div>
//     </ResponsiveDialog>
//   )
// }

// // Example 3: No footer
// export function NoFooterDialog() {
//   return (
//     <ResponsiveDialog
//       trigger={<Button>View Details</Button>}
//       title="Details"
//       showFooter={false}
//     >
//       <p>Content without a footer</p>
//     </ResponsiveDialog>
//   )
// }

// // Example 4: Custom footer
// export function CustomFooterDialog() {
//   return (
//     <ResponsiveDialog
//       trigger={<Button>Confirm Action</Button>}
//       title="Are you sure?"
//       description="This action cannot be undone."
//       footerContent={
//         <>
//           <Button variant="destructive">Delete</Button>
//           <DrawerClose asChild>
//             <Button variant="outline">Cancel</Button>
//           </DrawerClose>
//         </>
//       }
//     >
//       <p>Warning message here...</p>
//     </ResponsiveDialog>
//   )
// }

//Example 5: no trigger
//  <ResponsiveDialog
//       //       trigger={<Button>Confirm Action</Button>}
//       open={open}
//       onOpenChange={handleClose}
//       title="Are you sure?"
//       description="This action cannot be undone."
//       footerContent={
//         <div className="flex gap-2 justify-center">
//           <Button variant="destructive" size="lg">
//             Delete
//           </Button>
//           <DrawerClose asChild>
//             <Button variant="outline" size="lg">
//               Cancel
//             </Button>
//           </DrawerClose>
//         </div>
//       }
//     >
//       <p>Warning message here...</p>
//     </ResponsiveDialog>
