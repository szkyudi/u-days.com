export default function setAttributeToExternalLink(html: Element) {
  const domain = document.domain;
  const regexp = new RegExp(domain);
  const aTags = html.getElementsByTagName("a");
  Array.prototype.forEach.call(aTags, (aTag: Element) => {
    const href = aTag.getAttribute("href");
    if (!regexp.test(href)) {
      aTag.setAttribute("target", "_blank");
      aTag.setAttribute("rel", "noopener noreferrer");
    }
  });
}
