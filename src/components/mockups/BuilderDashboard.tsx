import {
  Home,
  LayoutDashboard,
  Wrench,
  HardHat,
  BarChart3,
  ClipboardCheck,
  Bell,
} from 'lucide-react';

const nav = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Home, label: 'Homes' },
  { icon: ClipboardCheck, label: 'Punch list' },
  { icon: Wrench, label: 'Requests' },
  { icon: HardHat, label: 'Subcontractors' },
  { icon: BarChart3, label: 'Reports' },
];

const requests = [
  {
    home: '142 Maple Court',
    issue: 'HVAC not cooling',
    sub: 'Cool Air Co.',
    status: 'Overdue',
    tone: 'red',
  },
  {
    home: '88 Birch Lane',
    issue: 'Cabinet door alignment',
    sub: 'Finish Pros',
    status: 'In progress',
    tone: 'amber',
  },
  {
    home: '7 Oakridge Dr',
    issue: 'Grout touch-up',
    sub: 'TileWorks',
    status: 'Scheduled',
    tone: 'brand',
  },
  {
    home: '215 Cedar Way',
    issue: 'Garage door sensor',
    sub: 'Open/Close LLC',
    status: 'Complete',
    tone: 'emerald',
  },
];

const toneClasses: Record<string, string> = {
  red: 'bg-red-50 text-red-700 border-red-200',
  amber: 'bg-amber-50 text-amber-700 border-amber-200',
  brand: 'bg-brand-50 text-brand-700 border-brand-200',
  emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200',
};

const stats = [
  { label: 'Open requests', value: '23', tone: 'text-slate-900' },
  { label: 'Overdue', value: '3', tone: 'text-red-600' },
  { label: 'Avg. response', value: '4h', tone: 'text-emerald-600' },
];

export function BuilderDashboard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-slate-300" />
        <span className="h-3 w-3 rounded-full bg-slate-300" />
        <span className="h-3 w-3 rounded-full bg-slate-300" />
        <div className="ml-3 hidden flex-1 items-center rounded-md border border-slate-200 bg-white px-3 py-1 text-xs text-slate-400 sm:flex">
          app.gethomefront.com/dashboard
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden w-44 shrink-0 border-r border-slate-200 bg-white p-3 sm:block">
          <div className="mb-4 flex items-center gap-2 px-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-brand-600">
              <Home className="h-3.5 w-3.5 text-white" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold text-slate-900">
              Homefront
            </span>
          </div>
          <nav className="space-y-1">
            {nav.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs font-medium ${
                  item.active
                    ? 'bg-brand-50 text-brand-700'
                    : 'text-slate-500'
                }`}
              >
                <item.icon className="h-4 w-4" aria-hidden="true" />
                {item.label}
              </div>
            ))}
          </nav>
        </aside>

        {/* Main */}
        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Service requests
              </p>
              <p className="text-xs text-slate-500">Whitfield Homes</p>
            </div>
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 text-slate-400">
              <Bell className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>

          {/* Stats */}
          <div className="mb-4 grid grid-cols-3 gap-2 sm:gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-slate-200 bg-slate-50 p-3"
              >
                <p className={`text-lg font-semibold ${s.tone}`}>{s.value}</p>
                <p className="truncate text-[10px] text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Requests list */}
          <div className="overflow-hidden rounded-xl border border-slate-200">
            {requests.map((r, i) => (
              <div
                key={r.home}
                className={`flex items-center justify-between gap-3 px-3 py-2.5 ${
                  i !== requests.length - 1 ? 'border-b border-slate-100' : ''
                }`}
              >
                <div className="min-w-0">
                  <p className="truncate text-xs font-medium text-slate-900">
                    {r.home}
                  </p>
                  <p className="truncate text-[11px] text-slate-500">
                    {r.issue} · {r.sub}
                  </p>
                </div>
                <span
                  className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${toneClasses[r.tone]}`}
                >
                  {r.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
