import filters, { VisibilityFilters, setVisibilityFilter } from './filtersSlice'

describe('filters reducer', () => {
  const { SHOW_ALL, SHOW_COMPLETED } = VisibilityFilters

  it('should handle initial state', () => {
    expect(filters(undefined, {})).toEqual(SHOW_ALL)
  });

  it('should handle `setVisibilityFilter`', () => {
    expect(filters(SHOW_ALL, {
      type: setVisibilityFilter.type,
      payload: SHOW_COMPLETED
    })).toEqual(SHOW_COMPLETED)
  });
});
