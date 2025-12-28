'use server'

const action = async (_, formData) => {
  try {
    const name = formData.get('name')
    if (!name) {
      return {
        success: false,
        message: 'Please provide your name.',
      }
    }

    const email = formData.get('email')
    if (!email) {
      return {
        success: false,
        message: 'Please provide your email address.',
      }
    }

    const subject = formData.get('subject')
    if (!subject) {
      return {
        success: false,
        message: 'Please provide a subject.',
      }
    }

    const message = formData.get('message')
    if (!message) {
      return {
        success: false,
        message: 'Please provide a message.',
      }
    }

    const url = process.env.CONTACT_FORM_ACTION_URL

    if (!url) {
      console.error('CONTACT_FORM_ACTION_URL is missing')
      return {
        success: false,
        message: 'Server configuration error.',
      }
    }

    const res = await fetch(url, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })

    if (res.ok) {
      return {
        success: true,
        message: 'Thanks for your submission!',
      }
    }

    const data = await res.json()
    console.error(data?.error)

    return {
      success: false,
      message: 'Oops! There was a problem submitting your form',
    }
  } catch (error) {
    console.error('Contact form submission error:', error)

    return {
      success: false,
      message: 'Oops! There was a problem submitting your form',
    }
  }
}

export default action
