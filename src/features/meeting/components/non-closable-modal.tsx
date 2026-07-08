import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

export function NonClosableModal() {
  return (
    <Dialog open modal>
      <DialogContent showCloseButton={false} className="gap-4 p-6 sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Meeting paused
          </DialogTitle>
          <DialogDescription className="text-sm leading-relaxed">
            The host has temporarily paused this meeting. Recording, chat, and
            audio are on hold, and no one can leave or join until the meeting
            resumes.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
