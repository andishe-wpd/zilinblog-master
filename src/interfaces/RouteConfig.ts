export interface RouteConfig {
    path?: string
    name?: string
    Component: React.LazyExoticComponent<React.FC>
    exact?: boolean
  }
  