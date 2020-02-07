import Mercury from '@postlight/mercury-parser';

import { corsSuccessResponse, corsErrorResponse, runWarm } from './utils';

const mercuryParser = async ({ queryStringParameters }, context, cb) => {
  const { url, contentType } = queryStringParameters;

  const result = await Mercury.parse(url, { contentType });

  return cb(
    null,
    result
      ? corsSuccessResponse(result)
      : corsErrorResponse({ message: 'There was an error parsing that URL.' })
  );
};

export default runWarm(mercuryParser);
