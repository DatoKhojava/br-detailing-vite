/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as ProtectedRouteImport } from './routes/_protected/route'
import { Route as ProtectedDashboardIndexImport } from './routes/_protected/dashboard/index'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const ProtectedRouteRoute = ProtectedRouteImport.update({
  id: '/_protected',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const ProtectedDashboardIndexRoute = ProtectedDashboardIndexImport.update({
  id: '/dashboard/',
  path: '/dashboard/',
  getParentRoute: () => ProtectedRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/_protected': {
      id: '/_protected'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof ProtectedRouteImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/_protected/dashboard/': {
      id: '/_protected/dashboard/'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof ProtectedDashboardIndexImport
      parentRoute: typeof ProtectedRouteImport
    }
  }
}

// Create and export the route tree

interface ProtectedRouteRouteChildren {
  ProtectedDashboardIndexRoute: typeof ProtectedDashboardIndexRoute
}

const ProtectedRouteRouteChildren: ProtectedRouteRouteChildren = {
  ProtectedDashboardIndexRoute: ProtectedDashboardIndexRoute,
}

const ProtectedRouteRouteWithChildren = ProtectedRouteRoute._addFileChildren(
  ProtectedRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '': typeof ProtectedRouteRouteWithChildren
  '/login': typeof LoginRoute
  '/dashboard': typeof ProtectedDashboardIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '': typeof ProtectedRouteRouteWithChildren
  '/login': typeof LoginRoute
  '/dashboard': typeof ProtectedDashboardIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/_protected': typeof ProtectedRouteRouteWithChildren
  '/login': typeof LoginRoute
  '/_protected/dashboard/': typeof ProtectedDashboardIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '' | '/login' | '/dashboard'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '' | '/login' | '/dashboard'
  id: '__root__' | '/' | '/_protected' | '/login' | '/_protected/dashboard/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  ProtectedRouteRoute: typeof ProtectedRouteRouteWithChildren
  LoginRoute: typeof LoginRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  ProtectedRouteRoute: ProtectedRouteRouteWithChildren,
  LoginRoute: LoginRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_protected",
        "/login"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/_protected": {
      "filePath": "_protected/route.tsx",
      "children": [
        "/_protected/dashboard/"
      ]
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/_protected/dashboard/": {
      "filePath": "_protected/dashboard/index.tsx",
      "parent": "/_protected"
    }
  }
}
ROUTE_MANIFEST_END */
