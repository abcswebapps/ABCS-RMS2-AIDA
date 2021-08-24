import { useState, useEffect } from 'react'
import { ChevronLeftIcon, XIcon } from '@heroicons/react/solid'

import Map from 'ol/Map'

// Settings sidebar
// Generally for 'global' settings (ones which adjust the entire view and/or all
// annotation items within the view). Layers and channels are other examples
// of 'global' settings.
const SettingSidebar = (props: { map: Map }) => {
  const { map } = props

  const [isOpen, setIsOpen] = useState(true)

  // Toggling the sidebar changes the size of the map container but Openlayers
  // isn't aware of this. So we need to manually trigger an update to map size.
  useEffect(() => {
    map.updateSize()
  }, [isOpen])

  return (
    <>
      {/* Open and close button */}
      <button
        onClick={() => setIsOpen(isOpen => !isOpen)}
        className={`hover:bg-gray-100 ${
          isOpen ? 'w-48 flex justify-between ' : ''
        } bg-gray-100 h-8 absolute top-0 right-0 inline-flex items-center p-2 border border-transparent shadow-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
      >
        {!isOpen && (
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        )}
        <span className={`${isOpen ? 'font-medium' : ''}`}>
          Settings
        </span>
        {isOpen && <XIcon className="h-4 w-4" aria-hidden="true" />}
      </button>

      {/* Content */}
      {isOpen &&
        <div className="bg-gray-100 mt-8 min-h-full w-48 p-2 shadow-sm text-gray-800">
          Content
        </div>
      }
    </>
  )
}

export default SettingSidebar
