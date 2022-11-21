export function defineStorage<T>(key: string) {
  return {
    get: function () {
      const value = localStorage.getItem(key)
      if (!value) return null
      return JSON.parse(value) as T
    },
    set: function (value: T) {
      localStorage.setItem(key, JSON.stringify(value))
    },
    remove: function () {
      localStorage.removeItem(key)
    },
  }
}

export const menuInactiveStorage = defineStorage<boolean>('menu_inactive')
