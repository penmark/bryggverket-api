declare module 'instagram-node' {
  export function instagram(conf?: any, my?: any): any;
}
declare module 'keystone' {
  import * as Express from 'express'
  import * as Mongoose from 'mongoose'

  class Content {
    Page: any

    Types: any

    fetch(page, callback)

    store(page, content, callback)

    page(key, page)

    initModel()

    editable(user, options)
  }

  interface KeystoneUtils {

  }

  interface KeystoneStartEvents {
    onStart?: () => void
    onMount?: () => void
    onHttpServerCreated?: () => void
    onHttpsServerCreated?: () => void
    onSocketServerCreated?: () => void
  }

  interface KeystoneInitOptions {
    name?: string
    brand?: string
    'admin path'?: string
    compress?: boolean
    headless?: boolean
    logger?: string
    session?: boolean
    auth?: boolean
    'auto update'?: boolean
    updates?: string
    'model prefix'?: string
    'user model'?: string
    'module root'?: string
    'frame guard'?: string
    mongo?: string
    'cookie secret'?: string
    favicon?: string
    'static'?: string | string[]
  }

  interface AutokeyOptions {
    path?: string
    from?: string
    unique?: boolean
    fixed?: boolean
  }

  interface KeystoneListOptions {
    noedit?: boolean
    nocreate?: boolean
    nodelete?: boolean
    autocreate?: boolean
    sortable?: boolean
    hidden?: boolean
    track?: boolean
    inherits?: keystone.List
    perPage?: number
    searchFields?: string
    searchUsesTextIndex?: boolean
    defaultSort?: string
    defaultColumns?: string
    autokey?: AutokeyOptions
    map?: any
    label?: string
    path?: string
    singular?: string
    plural?: string
    schema?: string
    drilldown?: string

  }

  namespace keystone {
    class List {
      constructor(key: string, options?: KeystoneListOptions)

      schema: Mongoose.Schema

      model: Mongoose.Model<any>

      defaultColumns: string

      register()

      add(obj?: {[key: string]: FieldOptions}, prefix?: string)
    }

    const Field: {
      Types: {
        AzureFile: any
        Boolean: any
        CloudinaryImage: any
        CloudinaryImages: any
        Code: any
        Color: any
        Date: any
        DateArray: any
        Datetime: any
        Email: any
        Embedly: any
        File: any
        GeoPoint: any
        Html: any
        Key: any
        LocalFile: any
        LocalFiles: any
        Location: any
        Markdown: any
        Money: any
        Name: any
        Number: any
        NumberArray: any
        Password: any
        Relationship: any
        S3File: any
        Select: any
        Text: any
        TextArray: any
        Textarea: any
        Url: any
      }
    }
    interface FieldOptions {
      label?: string
      required?: boolean
      initial?: boolean
      nodedit?: boolean
      note?: string
      hidden?: boolean
      collapse?: boolean
      dependsOn?: Object
      type?: any
      wysiwyg?: boolean
      dest?: string
      prefix?: string
      datePrefix?: string
      allowedTypes?: string[]
      filename?: (model: List, file: File) => string
      format?: (model: List, file: File) => string
      index?: boolean
      unique?: boolean
      storage?: any
    }

    const express: Express.Application

    const mongoose: Mongoose.Mongoose

    const utils: KeystoneUtils

    const content: Content

    function list(key: string): List

    function init(options: KeystoneInitOptions)

    function set(name: string, value: any)

    function get(name: string)

    function start(events?: KeystoneStartEvents | (() => void))

    function importer(path: string)

  }

  export = keystone
}
