import Mercury from '@postlight/mercury-parser';

import { corsSuccessResponse, corsErrorResponse, runWarm } from './utils';

const parseHtml = async ({ body }, context, cb) => {
  const { url, html, contentType } = JSON.parse(body);

  const result = await Mercury.parse(url, { contentType, html });

  return cb(
    null,
    result
      ? corsSuccessResponse(result)
      : corsErrorResponse({ message: 'There was an error parsing that URL.' })
  );
};

export default runWarm(parseHtml);
