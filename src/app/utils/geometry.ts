export function getRandomPosition(): [number, number, number] {
  return [Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5]
}

export function getRandomColor(): string {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`
}