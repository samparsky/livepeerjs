import React, { Component } from 'react'
import Hls from 'hls.js'

const CACHE = {}

export default class Snapshot extends Component {
  static defaultProps = {
    as: 'img',
    at: 0,
    defaultSrc: '',
    crop: true,
    width: 100,
    height: 100,
    onSnapshotReady: () => {},
  }
  state = {
    src: '',
  }
  canvas = document.createElement('canvas')
  video = document.createElement('video')
  setThumbnailDataURL = () => {
    const { canvas, ctx, key, props, video } = this
    const { videoWidth, videoHeight } = video
    const { crop, width, height } = props
    if (!CACHE[key]) {
      const w = Number(width)
      const h = Number(height)
      const wScale = w / videoWidth
      const hScale = h / videoHeight
      const scale = Math[crop ? 'max' : 'min'](wScale, hScale)
      canvas.width = w
      canvas.height = h
      ctx.drawImage(
        video,
        0,
        0,
        videoWidth,
        videoHeight,
        (w - videoWidth * scale) / 2,
        (h - videoHeight * scale) / 2,
        videoWidth * scale,
        videoHeight * scale,
      )
      CACHE[key] = canvas.toDataURL()
    }
    this.setState({ src: CACHE[key] }, () => {
      this.props.onSnapshotReady(this.state.src)
    })
    this.video.removeEventListener('canplay', this.setThumbnailDataURL)
    this.hls.destroy()
  }
  updateThumbnail = () => {
    if (CACHE[this.key]) {
      return this.setState({ src: CACHE[this.key] }, () => {
        this.props.onSnapshotReady(this.state.src)
      })
    }
    const { canvas, video, props } = this
    const parent = document.createElement('div')
    parent.appendChild(canvas)
    parent.appendChild(video)
    this.hls = new Hls()
    this.ctx = canvas.getContext('2d')
    this.hls.loadSource(props.url)
    this.hls.attachMedia(video)
    video.currentTime = props.at
    this.video.addEventListener('canplay', this.setThumbnailDataURL)
  }
  getKey = props => {
    return JSON.stringify({
      at: props.at,
      width: props.width,
      height: props.height,
      crop: props.crop,
      url: props.url,
    })
  }
  componentDidMount() {
    this.key = this.getKey(this.props)
    this.updateThumbnail()
  }
  componentWillUnmount() {
    this.video.removeEventListener('canplay', this.setThumbnailDataURL)
  }
  componentWillReceiveProps(nextProps) {
    const nextKey = this.getKey(nextProps)
    if (this.key === nextKey) return
    this.key = nextKey
    this.updateThumbnail()
  }
  render() {
    const { as, at, crop, defaultSrc, onSnapshotReady, ...props } = this.props
    const { src } = this.state
    return React.createElement(as, { ...props, src: src || defaultSrc })
  }
}
