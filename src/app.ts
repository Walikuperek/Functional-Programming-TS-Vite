export const app = document.querySelector<HTMLDivElement>('#app')!

export const listOfTopics = [
    'Typing DDD',
    'First-class fns',
    'Strategy',
    'Decorator',
    'Dependency Injection',
    'DRY',
    'Partial-continuations',
    'Chaining / Piping',
    'Monoids',
]

export const listItemsOfTopics = listOfTopics.map(topic => `<li>${topic}</li>`).join('')

export const appHtml = (title: string) => `
<h1>${title}</h1>
<ul style="list-style-type: none">${listItemsOfTopics}</ul>`

