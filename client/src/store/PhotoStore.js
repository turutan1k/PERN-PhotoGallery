import { makeAutoObservable } from "mobx"

export default class PhotoStore {
    constructor() {
        this._views = []
        this._locations = []
        this._photos = []
        this._devices = []
        this._colors = []
        this._qualities = []
        this._descriptions = []
        this._selectedView = {}
        this._selectedLocation = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 9
        makeAutoObservable(this)
    }

    setPhotos(photos) {
        this._photos = photos
    }
    setViews(views) {
        this._views = views
    }
    setLocations(locations) {
        this._locations = locations
    }
    setQualities(qualities) {
        this._qualities = qualities
    }
    setColors(colors) {
        this._colors = colors
    }
    setDescriptions(descriptions) {
        this._descriptions = descriptions
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedView(view) {
        this.setPage(1)
        this._selectedView = view
    }
    setSelectedLocation(location) {
        this.setPage(1)
        this._selectedLocation = location
    }
    setSelectedQuality(quality) {
        this._selectedQuality = quality
    }
    setSelectedColor(color) {
        this._selectedColor = color
    }
    setSelectedDescription(description) {
        this._selectedDescription = description
    }
    setSelectedDevice(device) {
        this._selectedDevice = device
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get photos() {
        return this._photos
    }
    get views() {
        return this._views
    }
    get locations() {
        return this._locations
    }
    get devices() {
        return this._devices
    }
    get colors() {
        return this._colors
    }
    get qualities() {
        return this._qualities
    }
    get descriptions() {
        return this._descriptions
    }
    get selectedView() {
        return this._selectedView
    }
    get selectedLocation() {
        return this._selectedLocation
    }
    get selectedDevice() {
        return this._selectedDevice
    }
    get selectedDescription() {
        return this._selectedDescription
    }
    get selectedQuality() {
        return this._selectedQuality
    }
    get selectedColor() {
        return this._selectedColor
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}
