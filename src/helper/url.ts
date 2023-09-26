import URI, { QueryDataMap } from 'urijs';

export interface AppendQueryStringToUrlOptionInterface {
  enableOverride: boolean;
}

export const isValidUrl = (url: string): boolean => {
  if (typeof url !== 'string') return false;
  const instUri = new URI(url);
  return instUri.is('url');
};

export const appendQueryStringToUrl = (
  url: string,
  queryString: QueryDataMap,
  inputOption?: AppendQueryStringToUrlOptionInterface,
) => {
  if (!isValidUrl(url)) return '';

  const option: AppendQueryStringToUrlOptionInterface = {
    enableOverride: false,
    ...inputOption,
  };

  const instUri = new URI(url);

  if (option.enableOverride) {
    instUri.search(queryString);
  } else {
    instUri.setQuery(queryString);
  }

  return instUri.toString();
};
