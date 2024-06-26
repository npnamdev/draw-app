import {
	Canvas,
	ContextMenu,
	getUserData,
	TldrawEditor,
	TldrawUi,
	TldrawUiContextProvider,
	TLInstance,
	useLocalSyncClient,
} from '@tldraw/tldraw'
import '@tldraw/tldraw/editor.css'
import '@tldraw/tldraw/ui.css'

const instanceId = TLInstance.createCustomId('example')

export default function Example() {
	const userData = getUserData()

	const syncedStore = useLocalSyncClient({
		instanceId,
		userId: userData.id,
		universalPersistenceKey: 'example',
		// config: myConfig // for custom config, see 3-custom-config
	})

	return (
		<div className="tldraw__editor">
			<TldrawEditor instanceId={instanceId} userId={userData.id} store={syncedStore}>
				<TldrawUiContextProvider>
					<ContextMenu>
						<Canvas />
					</ContextMenu>
					<TldrawUi />
				</TldrawUiContextProvider>
			</TldrawEditor>
		</div>
	)
}
