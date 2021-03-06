import React from 'react'
import useDarkMode from 'use-dark-mode'
import { rgba } from 'polished'
import styled from '@emotion/styled'
import { FiMoon, FiSun } from 'react-icons/fi'
import Button from './Button'
import colors from '../lib/colors'

const DarkModeIcon = styled(FiMoon)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0',
})

const DefaultModeIcon = styled(FiSun)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0',
})

const ThemeToggler = () => {
  const darkMode = useDarkMode()

  return (
    <Button
      css={{
        background: rgba(darkMode.value ? colors.white : colors.black, 0.05),
        borderRadius: '50%',
        width: '2.375rem',
        height: '2.375rem',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        color: darkMode.value ? colors.white : colors.black,
        '@media (hover: hover)': {
          ':hover': {
            color: colors.white,
          },
        },
      }}
      aria-label={
        darkMode.value ? 'Switch to light mode' : 'Switch to dark mode'
      }
      onClick={() => (darkMode.value ? darkMode.disable() : darkMode.enable())}
    >
      {darkMode.value ? (
        <DefaultModeIcon title="Switch to light mode" />
      ) : (
        <DarkModeIcon title="Switch to dark mode" />
      )}
    </Button>
  )
}

export default ThemeToggler
