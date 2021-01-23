interface SearchEvent {
  action: 'searchBar_submit'
  category: 'search'
  label: string
}

interface TransitionEvent {
  action: 'router_changeComplete'
  category: 'transition'
  label: string
}

type GaEvent = SearchEvent | TransitionEvent