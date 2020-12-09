import { RootStateInterface } from '../../store'
import { createSelector } from 'reselect'

import { NotificationsStateInterface } from './contracts/state'
import { LoadingStatus } from '../../types'

export const selectNotifications = (state: RootStateInterface): NotificationsStateInterface => state.notifications

export const selectNotificationsLoadingStatus = (state: RootStateInterface): LoadingStatus => selectNotifications(state).LoadingStatus

export const selectIsNotificationsLoading = (state: RootStateInterface): boolean => selectNotificationsLoadingStatus(state) === LoadingStatus.LOADING
export const selectIsNotificationsLoaded = (state: RootStateInterface): boolean => selectNotificationsLoadingStatus(state) === LoadingStatus.LOADED
export const selectIsNotificationsLoadingError = (state: RootStateInterface): boolean => selectNotificationsLoadingStatus(state) === LoadingStatus.ERROR
