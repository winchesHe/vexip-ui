export interface I18nConfig {
  common: {
    language: string,
    makeInterest: string,
    slogan: string,
    getStarted: string,
    getComponents: string,
    changePrefix: string,
    apply: string,
    prefixChanged: string,
    changeColor: string,
    rollColor: string,
    resetColor: string,
    guides: string,
    components: string,
    playground: string,
    searchComponent: string,
    copyCode: string,
    copySuccess: string,
    copyFail: string,
    showCode: string,
    hideCode: string,
    editInGithub: string,
    editInPlayground: string,
    pageNotFound: string,
    backHomepage: string
  },
  alert: {
    info: string,
    warning: string,
    error: string
  },
  guide: {
    introduction: string,
    gettingStart: string,
    globalConfig: string,
    styleConfig: string,
    nameOrigin: string,
    logoOrigin: string
  },
  group: {
    basis: string,
    layout: string,
    navigation: string,
    form: string,
    data: string,
    effect: string,
    else: string
  },
  component: {
    Button: string,
    Icon: string,
    Linker: string,
    Typography: string,

    Grid: string,
    Divider: string,
    Layout: string,
    NativeScroll: string,
    Row: string,
    Scroll: string,
    Space: string,
    Split: string,

    Anchor: string,
    Breadcrumb: string,
    Dropdown: string,
    Menu: string,
    Pagination: string,

    AutoComplete: string,
    Cascader: string,
    Checkbox: string,
    ColorPicker: string,
    DatePicker: string,
    Form: string,
    FullScreen: string,
    Input: string,
    NumberInput: string,
    Radio: string,
    Result: string,
    Select: string,
    Slider: string,
    Switch: string,
    Textarea: string,
    TimePicker: string,
    Transfer: string,
    Upload: string,
    Wheel: string,

    Avatar: string,
    Badge: string,
    Bubble: string,
    Calendar: string,
    Card: string,
    Carousel: string,
    Collapse: string,
    Ellipsis: string,
    Highlight: string,
    Image: string,
    Table: string,
    TabNav: string,
    Tabs: string,
    Tag: string,
    TimeAgo: string,
    Timeline: string,
    Tooltip: string,
    Tree: string,
    Viewer: string,

    Alert: string,
    Confirm: string,
    Contextmenu: string,
    Drawer: string,
    Loading: string,
    Message: string,
    Modal: string,
    Notice: string,
    Progress: string,
    Skeleton: string,
    Spin: string,
    Toast: string,

    ConfigProvider: string,
    Masker: string,
    Overflow: string,
    Renderer: string,
    ResizeObserver: string,
    Scrollbar: string,
    VirtualList: string
  }
}

export function defineI18n(config: I18nConfig) {
  return config
}
