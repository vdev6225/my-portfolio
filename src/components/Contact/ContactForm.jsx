'use client'

import action from '@/actions/contact-form'
import { useActionState } from 'react'
import { CheckCircle, RefreshCcw } from 'lucide-react'
import Button from '../UI/Button'
import Input from '../UI/Input'
import Textarea from '../UI/Textarea'

// Add onReset prop here
const ContactForm = ({ onReset }) => {
  const [status, formAction, isPending] = useActionState(action, null)

  // Success View
  if (status?.success) {
    return (
      <div className="animate-in fade-in zoom-in flex h-full min-h-[400px] flex-col items-center justify-center rounded-xl border border-[#18f2e5]/20 bg-[#18f2e5]/5 p-8 text-center duration-300">
        <CheckCircle className="mb-4 h-16 w-16 text-[#18f2e5]" />
        <h3 className="mb-2 text-2xl font-bold text-[#18f2e5]">Message Sent!</h3>
        <p className="mb-6 text-lg font-medium text-slate-300">{status.message}</p>

        {/* The Reset Button */}
        <button
          onClick={onReset}
          className="flex items-center gap-2 rounded-lg border border-[#18f2e5] bg-[#112240] px-6 py-3 text-sm font-bold tracking-widest text-[#18f2e5] uppercase transition-all hover:bg-[#18f2e5] hover:text-[#0a192f] cursor-pointer">
          <RefreshCcw className="h-4 w-4" />
          Send Another
        </button>
      </div>
    )
  }

  // Form View
  return (
    <form action={formAction} className="w-full">
      <Input label="Full name" id="name" name="name" placeholder="Your name here" required />

      <Input
        label="Email address"
        id="email"
        type="email"
        name="email"
        placeholder="Your email address here"
        required
      />

      <Input label="Subject" id="subject" name="subject" placeholder="Your subject here" />

      <Textarea
        label="Message"
        id="message"
        name="message"
        placeholder="Your message here"
        rows={7}
        required
      />

      {!status?.success && status?.message && (
        <div className="mb-6 rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-center text-sm font-medium text-red-400">
          ⚠️ {status.message}
        </div>
      )}

      <Button text={isPending ? 'Submitting...' : 'Submit'} disabled={isPending} />
    </form>
  )
}

export default ContactForm
