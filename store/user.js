import web3 from '~/helper/web3'
import xuah from '~/helper/xUAH'
import usdt from '~/helper/ustdHelper'

export const state = () => ({
  address: null,
  balances: [],
  uahBalance: null,
  ethBalance: null,
  usdtBalance: null
})

export const mutations = {
  setAddress(state, address) {
    state.address = address
  },
  setBalances(state, balances) {
    state.balances = balances
  },
  setUahBalance(state, uahBalance) {
    state.uahBalance = uahBalance
  },
  setEthBalance(state, ethBalance) {
    state.ethBalance = ethBalance
  },
  setUSDtBalance(state, usdtBalance) {
    state.usdtBalance = usdtBalance
  }
}

export const actions = {
  async connectUser({ commit, dispatch }) {
    // eslint-disable-next-line
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    })
    await commit('setAddress', accounts[0])
    await dispatch('fetchBalances')
  },

  async fetchBalances({ state, commit }) {
    if (state.address !== null) {
      await web3.eth
        .getBalance(state.address)
        .then((val) =>
          commit('setEthBalance', web3.utils.fromWei(val).substring(0, 7))
        )

      await xuah.methods
        .balanceOf(state.address)
        .call()
        .then((val) => commit('setUahBalance', val))

      await usdt.methods
        .balanceOf(state.address)
        .call()
        .then((val) => commit('setUSDtBalance', val))
    }
  }
}
