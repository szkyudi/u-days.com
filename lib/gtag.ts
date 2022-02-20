export const GA_TRACKING_ID = 'G-9RPJNYHQBK'

export const pageview = (path: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: path,
  })
}

export const event = ({action, category, label}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: JSON.stringify(label)
  })
}
