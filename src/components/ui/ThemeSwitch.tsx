import { useLocalStorageState } from 'ahooks'

import { Button } from '@/components/ui/button'

const builtinColors = [
  'zinc',
  'slate',
  'stone',
  'gray',
  'neutral',
  'red',
  'rose',
  'orange',
  'green',
  'blue',
  'yellow',
  'violet',
] as const
const builtinRadiuses = [0, 0.3, 0.5, 0.75, 1] as const

export function ThemeSwitch() {
  const [currentColor, setCurrentColor] = useLocalStorageState<(typeof builtinColors)[number]>('currentColor', {
    defaultValue: 'neutral',
  })

  const [currentRadius, setCurrentRadius] = useLocalStorageState<(typeof builtinRadiuses)[number]>('currentRadius', {
    defaultValue: 0,
  })

  return (
    <div className="space-y-4">
      <p>Color</p>
      <div className="grid grid-cols-6 gap-2">
        {builtinColors.map((color) => (
          <Button
            key={color}
            onClick={() => {
              document.body.classList.remove(`theme-${currentColor}`)
              document.body.classList.add(`theme-${color}`)
              setCurrentColor(color)
            }}
            variant={color === currentColor ? 'default' : 'secondary'}
          >
            {color}
          </Button>
        ))}
      </div>
      <p>Radius</p>
      <div className="flex gap-2">
        {builtinRadiuses.map((radius) => (
          <Button
            key={radius}
            onClick={() => {
              document.body.style.setProperty('--radius', `${radius}rem`)
              setCurrentRadius(radius)
            }}
            variant={radius === currentRadius ? 'default' : 'secondary'}
          >
            {radius}
          </Button>
        ))}
      </div>
    </div>
  )
}
