interface NameEntry {
    fullName: string
}

interface Map {
    [key: string]: NameEntry
  }

const FAKE_NAME_MAP: Map = {
    markm: {
        fullName: "Mark McCulloh"
    },
    test: {
        fullName: "Test Testerson"
    },
}
export default FAKE_NAME_MAP