import { Optional } from 'ts-roids';

export const URL_REGEX = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}$/; // eslint-disable-line no-useless-escape
export const OPTIONAL_PROTOCOL_URL_REGEX =
  /^(?:https?:\/\/)?(?:www\.)?([^\/]+)(?:\/.*)?$/; // eslint-disable-line no-useless-escape

export class NamesService {
  // private static matchURL(dto: { url: string }): Optional<RegExpMatchArray> {
  //   return dto.url.match(URL_REGEX);
  // }
  public static getSiteName({ url }: { url: string }): Optional<string> {
    const match = url.match(OPTIONAL_PROTOCOL_URL_REGEX);
    if (match) {
      const parts = match[1].split('.');
      const tld = parts.pop();
      const domain = parts.join('.');
      if (!domain || !tld) {
        return null;
      }
      return domain + '.' + tld;
    } else {
      return null;
    }
  }
}
