import { atom, useAtom } from 'jotai';

export type Status = 'READY' | 'COPIED' | 'FAILED';

const statusAtom = atom<Status>('READY');

/**
 * Custom hook for managing the status of the clipboard.
 */
export const useStatus = () => useAtom(statusAtom);
