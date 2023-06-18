import { createSelector } from "@reduxjs/toolkit";

export const contactsSelector = state => state.contacts.items;
export const filterSelector = state => state.filter.filter

export const filteredContactsSelector = createSelector(
    [contactsSelector, filterSelector],
    (contacts, filter) => {
        return contacts?.filter(({ name }) =>
          name.toLowerCase().includes(filter.toLowerCase())
        );
    });       