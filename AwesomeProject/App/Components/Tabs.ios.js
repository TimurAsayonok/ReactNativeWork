'use strict'

import React, {Component} from 'react';
import Dashboard from './DashboardView';
import Heroes from './HeroesView';
import {
  TabBarIOS,
  Text
} from 'react-native';
const dashboardIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADaElEQVR4Xu2cTWoUURSF73s98zfV1WtQcQWZKs5EdDW6hehmDMGhONUliGvoIEoyfSVdJgiKudzpOV+Pz+Q75+PR1OC24GfdQLOmBz4QwFwCBEAA8wbM8XkBEMC8AXN8XgAEMG/AHJ8XAAHMGzDH5wVAAPMGzPF5ARDAvAFzfF4ABDBvwByfFwABzBswx+cFQICIeZ4fjTFOloinvfe75p1I448xLje9f4qI1+fn51/bYfwl4ktE3JcmB+7vBn60iOM2TdNp6/0l/fg1sIxx1o6m6SfPvt/4B+IxxgUCeG6/Uq8CTNP0vvX+yrgHW/RljNO22+0ejmU5/Ak8sm3CE/x7b+14/Q6w2+0ejGU5GWM84/+Atg3rsx/xcbPZvNnv99/4EKS9d0qHAGlF2gEE0N43pUOAtCLtAAJo75vSIUBakXYAAbT3TekQIK1IO4AA2vumdAiQVqQdQADtfVM6BEgr0g4ggPa+KR0CpBVpBxBAe9+UDgHSirQDCKC9b0qHAGlF2gEE0N43pUOAtCLtAAJo75vSIUBakXYAAbT3TekQIK1IO4AA2vumdAiQVqQdQADtfVM6BEgr0g4ggPa+KR0CpBVpBxBAe9+UDgHSirQDqwDb7fZxRLwby/Kk935LG9mb7p87gYfxR2ufe8Q972rs6H/fCdxutx+ited2+ADH9Z3AS559Txuu7wRe9N5ve1bgTb0KMM/z2RLxwrsKT/r1TiDHoj3Hj4g/dwKvzsW/vToXf8e2EgNw7gQajFxB5EtgpS3BLAIIjlpBQoBKW4JZBBActYKEAJW2BLMIIDhqBQkBKm0JZhFAcNQKEgJU2hLMIoDgqBUkBKi0JZhFAMFRK0gIUGlLMIsAgqNWkBCg0pZgFgEER60gIUClLcEsAgiOWkFCgEpbglkEEBy1goQAlbYEswggOGoFCQEqbQlmEUBw1AoSAlTaEswigOCoFSQEqLQlmEUAwVErSAhQaUswiwCCo1aQEKDSlmCWO4GCo96ExJ1As8FvwOVOoLsL3Ak0N4A7gQjAnUBnB7gT6Lw+dwI91+dOoOfu/6XmS6C5EAiAAOYNmOPzAiCAeQPm+LwACGDegDk+LwACmDdgjs8LgADmDZjj8wIggHkD5vi8AAhg3oA5Pi8AApg3YI7PC4AA5g2Y4/8C1C+o+vIVybUAAAAASUVORK5CYII=';
const heroesIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAFYElEQVR4Xu2dy64NURCG/2Mk7l4CMXabOpgQEeJV8AouzyJEGLjEEAOMEV7BXQxJSe/Y2Tn79Kqutbq7qv4zPavWrqrv69W9u3t3b4B/qTuwkbp6Fg8KkFwCCkABkncgeflcAShA8g4kL58rAAVI3oHk5XMFoAApO3AUwB0Am131TwFcA/A+WzcyrgAnATwGsH8F9lcA5wC8ziRBNgHWwV8wTydBJgH64KeUIIsApfDTSZBBAC38VBJEF2Ao/DQSRBbACj+FBFEFqAU/vAQRBdDAl6998neg4Lt/yK+I0QTQwj8LYAeAJ1kliCTAEPhvui3/eFYJoghggb9Y/VNKEEGAGvDTSuBdgJrwU0rgWYAW8NNJ4FWAlvBTSeBRgDHgL0sgN4us3juw1WkDl+cJvAkwJvwUEngSYAr44SXwIsCU8ENL4EEADfwv3X19izN8Baf4VUPkZFGoY4K5CzAn+CFXgjkLMEf44SSYqwBzhh9KgjkK4AF+GAnmJoAn+AsJTnSXkl2eLJqTAB7hu5dgLgJ4hu9agjkIEAG+WwmmFiASfJcSTClARPjuJJhKgMjwXUkwhQAZ4LuRYGwBtPDlvv23qss18xusqXn0m0rGFEDTCLmqFwH+QkdN7aNKMJYAmgZEgz9rCcYQgPD/75Y0vRhlJWgtgKbgqFv+6lGJpifNJWgpgKbQLPBntztoJQDh938b0fSo2UrQQgBNYdm2/K12By+Bohd3NJGgtgCE37/lr474owipLkFNAQhfQXJpqEYACasqQS0BCH8YfInSClBVghoCEP5w+EMFqCaBVQDCt8G3CFBFAosAhG+HbxXALMFQAQi/DvwaApgkGCIA4deDXyKAHPU3e46hVgDCrwu/RIDFD1KbSKARgPDrwy8RQBgd636VXF2CUgEIvw38UgFkXBMJSgSQFyy9KHxOTvZz+0M06TsRtMxIK4FsuB+2S6pEgEcAzhdURvgFTdpiiEYA7UpwD8AVqwC/AezsqY3wh8HX7AKWP6F0JfgBYF9rAQh/OPyhApSuBN/7dt0lu4AHAC6uqZHwbfAtApRIcBfAVesKcBiA3LRwcGWiz90DmUru25cDydsATndXv54DuA7gnb1/7mfQHgOsFrxudyB85NkFn6wCSPwhADe7e/UlYXlS1o2+ybsPFvgi0Oq+6BuAU5Sg93JwySotG+ktAGe6nssLMITPx77No2Tyvjn6/v8QwIU1g2T3cqlvguD/t64ApvaMIcAvALvWZPkTwF5TBf6DwwswaYEO/Ji0P2OsAJMWSAG27wAFmN6QSTcQCkABmndgUsObV2f/gEn7wxXADtA6AwWwdtB5PAVwDtCaPgWwdtB5PAVwDtCaPgWwdtB5PAVwDtCaPgWwdtB5PAVwDtCaPgWwdtB5PAVwDtCaPgWwdtB5PAVwDtCaPgWwdtB5PAVwDtCaPgWwdtB5PAVwDtCaPgWwdtB5PAVwDtCaPgWwdtB5PAVwDtCaPgWwdtB5PAVwDtCaPgWwdtB5PAVwDtCaPgWwdtB5PAVwDtCaPgWwdtB5PAVwDtCaPgWwdtB5PAVwDtCaPgWwdtB5PAVwDtCaPgWwdtB5PAVwDtCafnoBrA2MHt/0MT5NJ+/I9BkeHaC1vqaMmk5OAazs/8U3ZdR0cgpAAaQD8kDo3VVakW+S5g/THmMF2O6NI/mQ6iq+D+CyLkQ3egwBjgB41ffuGl3aKUbL63jkhRrbvvbN2okxBJAcRQJ5o8UmgD3WpIPHy7L/rHvjR1P4zY8wg4MKUd5YK0CIZkUsggJEpKqoiQIomhVxKAWISFVREwVQNCviUAoQkaqiJgqgaFbEoX8B886+kEq1TM0AAAAASUVORK5CYII=';
class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'dashboard'
    }
  }

  render(){
    return (
      <TabBarIOS style={{backgroundColor: '#fff'}}>
        <TabBarIOS.Item
          title="Dashboard"
          icon={{uri: dashboardIcon, scale: 6}}
          selected={this.state.selectedTab === 'dashboard'}
          onPress={() => {
            this.setState({
              selectedTab: 'dashboard'
            })
          }}>

          <Dashboard navigator={this.props.navigator}/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="Heroes"
          selected={this.state.selectedTab === 'heroes'}
          icon={{uri: heroesIcon, scale: 6}}
          onPress={() => {
            this.setState({
              selectedTab: 'heroes'
            })
          }}>

          <Heroes />
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}

module.exports = Tabs;
