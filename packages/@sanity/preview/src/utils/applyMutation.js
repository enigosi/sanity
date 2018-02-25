// @flow
import {Mutation} from '@sanity/mutator'

type Event = {
  previousRev: string,
  resultRev: string,
  mutations: Mutation[]
}

export default function applyMutations(doc: Document, event: Event) {
  return new Mutation(event).apply(doc)
}
