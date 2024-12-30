// JS function to see device dimensions
export default function showDeviceViewport(): void {
  const inner: HTMLElement | null = document.getElementById('innerDimensions')
  if (inner) {
    const dimensions: string = `${window.innerWidth}x${window.innerHeight}`
    inner.textContent = dimensions
  }

  const outer: HTMLElement | null = document.getElementById('outerDimensions')
  if (outer) {
    const dimensions: string = `${window.outerWidth}x${window.outerHeight}`
    outer.textContent = dimensions
  }
}

// Use in view
// window.addEventListener('resize', showDeviceViewport)
// showDeviceViewport()

// Inner HTML Document
// Samsung S52 => 360x667
// Mi notebook 13" => 1301x630 (Web Zoom 100%)

// Outer Browser Window
// Mi notebook 13" => 1366x728 (Web Zoom 100%)
// Mi PC Chrome Private => 1333x793 (Web Zoom 100%)
