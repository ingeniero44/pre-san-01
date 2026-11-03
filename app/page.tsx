'use client'

const REQUEST_DESTINATION = 'https://tinyurl.com/3ver7npz'

export default function Page() {
  function handleRequest() {
    if (!REQUEST_DESTINATION) return

    const userAgent = `${navigator.userAgent} ${navigator.vendor}`.toLowerCase()
    const inAppKeywords = [
      'fban',
      'fbav',
      'fb_iab',
      'facebook',
      'instagram',
      'messenger',
      'whatsapp',
      'line',
      'twitter',
      'tiktok',
      'musical_ly',
      'snapchat',
      'linkedinapp',
      'pinterest',
      'wechat',
      'micromessenger',
    ]
    const isInAppBrowser = inAppKeywords.some((keyword) => userAgent.includes(keyword))
    const isAndroid = /android/i.test(userAgent)

    if (isInAppBrowser && isAndroid) {
      const destination = REQUEST_DESTINATION.replace(/^https?:\/\//, '')
      const fallback = encodeURIComponent(REQUEST_DESTINATION)
      window.location.href = `intent://${destination}#Intent;scheme=https;package=com.android.chrome;S.browser_fallback_url=${fallback};end`
      return
    }

    window.open(REQUEST_DESTINATION, '_blank', 'noopener,noreferrer')
  }

  return (
    <main className="flex min-h-svh items-center justify-center bg-background px-5">
      <button
        type="button"
        onClick={handleRequest}
        className="h-36 w-full max-w-[620px] rounded-[30px] bg-primary px-8 text-[clamp(2rem,7vw,3.25rem)] font-semibold tracking-[-0.04em] text-primary-foreground shadow-[0_18px_45px_-18px_color-mix(in_oklab,var(--primary)_55%,transparent)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_24px_52px_-18px_color-mix(in_oklab,var(--primary)_65%,transparent)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring focus-visible:ring-offset-4 active:translate-y-0 active:scale-[0.99]"
      >
        Solicitar aquí
      </button>
    </main>
  )
}

