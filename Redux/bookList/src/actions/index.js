export function selectBook(book) {
  // selectBook is an action creator, it needs to return an action,
  //  an object with a type property
  return {
    // action always contains a type and sometimes a payload
    type: 'BOOK_SELECTED',
    payload: book
  }
}
