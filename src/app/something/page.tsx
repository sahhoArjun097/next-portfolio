import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/src/components/ui/resizable";

export function Resize() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="max-w-2xl  rounded-lg "
    >
      <ResizablePanelGroup orientation="horizontal">
        <ResizablePanel defaultSize="50%">
          <div className="flex h-[300px] items-center justify-center ">
            <div className="w-full h-full bg-amber-600">
              <img className="w-full h-full object-cover" src="IMG_3716.DNG" />
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize="50%">
          <ResizablePanelGroup orientation="vertical">
            <ResizablePanel defaultSize="50%">
              <div className="flex h-full items-center justify-center ">
                <div className="w-full h-full bg-amber-200">
                  <img
                    className="w-full h-full object-cover"
                    src="IMG_3716.DNG"
                  />
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize="50%">
              <div className="flex h-full items-center justify-center ">
                <div className="w-full h-full bg-amber-400">
                  <img
                    className="w-full h-full object-cover"
                    src="IMG_3716.DNG"
                  />
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize="50%">
          <ResizablePanelGroup orientation="vertical">
            <ResizablePanel defaultSize="50%">
              <div className="flex h-full items-center justify-center">
                <div className="w-full h-full bg-amber-100">
                  <img
                    className="w-full h-full object-cover"
                    src="IMG_3716.DNG"
                  />
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize="50%">
              <div className="flex h-full items-center justify-center ">
                <div className="w-full h-full bg-amber-600">
                  <img
                    className="w-full h-full object-cover"
                    src="IMG_3716.DNG"
                  />
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
      <ResizableHandle withHandle />
    </ResizablePanelGroup>
  );
}
