export interface LaunchPad {
  details: string;
  full_name: string;
  id: string;
  images: {
    large: string[];
    small?: string[];
  };
  latitude: number;
  launch_attempts: number;
  launch_successes: number;
  launches: string[];
  locality: string;
  longitude: number;
  name: string;
  region: string;
  rockets: string[];
  status: string;
  timezone: string;
  wikipedia?: string;
}

export interface LaunchPadSearchResult {
  docs: LaunchPad[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: number | null;
  offset: number | null;
  page: number;
  pagingCounter: number;
  prevPage: number | null;
  totalDocs: number;
  totalPages: number;
}

export interface LaunchpadQuery {
  query: {};
  options: {};
}

export enum ToolbarEventType {
  SearchEvent = 'SearchEvent',
  // Extendable to add more events
}
export type ToolbarEvent = {
  type: ToolbarEventType;
  event: KeyboardEvent | MouseEvent;
};

export interface Launch {
  auto_update: boolean;
  capsules: string[];
  date_local: string;
  date_precision: string;
  date_unix: number;
  date_utc: string;
  details: string;
  flight_number: number;
  id: string;
  launch_library_id: string;
  launchpad: string;
  name: string;
  net: boolean;
  payloads: string[];
  rocket: string;
  ships: string[];
  success: boolean;
  upcoming: boolean;
}