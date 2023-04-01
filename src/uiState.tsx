import {
    VotingOptions,
    WidgetUser,
  } from './voting'

export type UiState =
  | {
      votingState: 'NotStarted'
      storyName: string
    }
  | {
      votingState: 'InProgress'
      votingOptions: VotingOptions
      storyName: string
      storyDescription: string
      activeWidgetUsers: WidgetUser[]
    }
  | {
      votingState: 'Revealed'
      votingOptions: VotingOptions
      storyName: string
      storyDescription: string
    }

export const defaultUiState: UiState = {
  votingState: 'NotStarted',
  storyName: 'No Title'
}