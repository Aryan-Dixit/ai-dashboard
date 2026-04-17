import { DashboardLayout } from '@/components/layout/dashboard/DashboardLayout'
import { Card } from '@/components/ui/card/Card'

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <h1 style={{ marginBottom: 'var(--space-lg)' }}>Settings</h1>

      <div style={{ maxWidth: '500px' }}>
        <Card>
          <h3 style={{ marginBottom: 'var(--space-sm)' }}>
            Profile Settings
          </h3>

          <p>Update your preferences and account details.</p>
        </Card>
      </div>
    </DashboardLayout>
  )
}