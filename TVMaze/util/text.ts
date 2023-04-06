export function formatHtmlToText(html: string): string[] {
  return html?.split('</p><p>').map(text => text.replace(/<\/*[pbi]>/g, ''));
}
