export const stripHtml = (html) => html?.replace(/<[^>]*>/g, "") ?? ""
