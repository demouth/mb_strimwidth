import { mb_strwidth } from "@demouth/mb_strwidth";

/**
 * mb_strimwidth
 * 
 * Truncates string to specified width, where halfwidth characters count as 1, and fullwidth characters count as 2.
 * See » http://www.unicode.org/reports/tr11/ for details regarding East Asian character widths.
 * 
 * @see https://www.php.net/manual/en/function.mb-strimwidth.php
 * @param str 
 * @param start 
 * @param width 
 * @param trimMarker 
 * @returns 
 */
export default (
  str: string,
  start: number,
  width: number,
  trimMarker = '',
): string => {

  const trimmakerWidth = mb_strwidth(trimMarker);
  const chars = Array.from(str);
  const l = chars.length;

  if (trimMarker === '' && width === 0) {
    return '';
  } else if (trimmakerWidth === width) {
    return trimMarker;
  }

  let targetWidth = width;
  if (trimmakerWidth > width) {
    targetWidth = l;
  }

  {
    let trimmedStr = '';
    let trimmedLength = 0;
    let trimmed = false;
    for (let i = start; i<l; i++) {
      const char = chars[i],
        charWidth = mb_strwidth(char),
        hasNext = (i+1 !== l);

      if (trimmedLength + charWidth > targetWidth) {
        trimmed = true;
        break;
      }

      trimmedStr += char;
      trimmedLength += charWidth;
      if (hasNext && trimmedLength >= targetWidth) {
        trimmed = true;
        break;
      }
    }

    if (!trimmed) {
      return trimmedStr;
    }
    if (trimmakerWidth === 0) {
      return trimmedStr;
    }
    if (trimMarker !== '' && trimmakerWidth > width) {
      return trimmedStr;
    }
  }

  let trimmedStr = '';
  let trimmedLength = 0;
  for (let i = start; i<l; i++) {
    const char = chars[i],
      charWidth = mb_strwidth(char);

    if (trimmedLength + charWidth + trimmakerWidth > targetWidth) {
      trimmedStr += trimMarker;
      break;
    }
    trimmedStr += char;
    trimmedLength += charWidth;
  }
  return trimmedStr;
};
