import { Button, Input, Select } from 'antd'
import { SearchOutlined } from '@ant-design/icons'


export default function page() {
  return (
    <div>
      <div className="flex items-center gap-3">
        <Input
          size="large"
          placeholder="Search Database..."
          prefix={<SearchOutlined className="size-4" />}
        />
        <Select
          size="large"
          defaultValue="running"
          className="min-w-[180px] max-w-[180px]"
          options={[
            {
              value: "running",
              label: (
                <div className="flex items-center gap-2 text-sm">
                  <div className="bg-primary size-2 rounded-full" />
                  Running
                </div>
              ),
            },
            {
              value: "stop",
              label: (
                <div className="flex items-center gap-2 text-sm">
                  <div className="bg-orange size-2 rounded-full" />
                  <span>Terminated</span>
                </div>
              ),
            },
          ]}
        />

        <Button type="primary" className="w-32 font-semibold">
          New
        </Button>
      </div>

      <div className='py-8'>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
        <Button type="dashed">Primary Button</Button>
        <Button type="primary" danger>
          Primary Button
        </Button>
        <Button type="primary" danger ghost>
          Primary Button
        </Button>
        <Button type="primary" ghost>
          Primary Button
        </Button>
      </div>
    </div>
  )
}
