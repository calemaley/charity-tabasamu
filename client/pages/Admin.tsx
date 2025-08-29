import { useEffect, useMemo, useState } from "react";
import { useContent } from "@/lib/content";
import type { HeroImage, SiteContent, HelpItem, StatItem } from "@shared/site-content";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-white rounded-xl shadow p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-charity-neutral-800">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function Admin() {
  const { data, isLoading, updateSection } = useContent();
  const [tokenInput, setTokenInput] = useState("");
  const [userInput, setUserInput] = useState("");
  const [passInput, setPassInput] = useState("");
  const [authed, setAuthed] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string>("");

  useEffect(() => {
    const existing = localStorage.getItem("ADMIN_BASIC") || localStorage.getItem("ADMIN_TOKEN");
    if (!existing) return;
    // verify
    fetch("/api/admin/state", { headers: getHeaders() })
      .then((r) => {
        if (r.ok) setAuthed(true);
      })
      .catch(() => {});
  }, []);

  const getHeaders = () => {
    const basic = localStorage.getItem("ADMIN_BASIC");
    if (basic) return { Authorization: basic } as any;
    const token = localStorage.getItem("ADMIN_TOKEN");
    return token ? ({ "X-Admin-Token": token } as any) : ({} as any);
  };

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    const basic = btoa(`${userInput}:${passInput}`);
    localStorage.setItem("ADMIN_BASIC", `Basic ${basic}`);
    localStorage.removeItem("ADMIN_TOKEN");
    try {
      const res = await fetch("/api/admin/state", { headers: { Authorization: `Basic ${basic}` } });
      if (res.ok) {
        setAuthed(true);
        return;
      }
      setAuthError("Invalid credentials");
    } catch (err) {
      setAuthError("Network error");
    }
  };

  const saveToken = () => {
    localStorage.setItem("ADMIN_TOKEN", tokenInput.trim());
    localStorage.removeItem("ADMIN_BASIC");
    setAuthed(true);
  };

  const logout = () => {
    localStorage.removeItem("ADMIN_BASIC");
    localStorage.removeItem("ADMIN_TOKEN");
    setAuthed(false);
  };

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-charity-orange-100 to-charity-green-100">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
          <form onSubmit={login} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Username</label>
              <input className="border rounded px-3 py-2 w-full" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input type="password" className="border rounded px-3 py-2 w-full" value={passInput} onChange={(e) => setPassInput(e.target.value)} />
            </div>
            {authError && <div className="text-red-600 text-sm">{authError}</div>}
            <button type="submit" className="w-full px-4 py-2 bg-charity-orange-600 text-white rounded">Login</button>
          </form>
          <div className="mt-6">
            <div className="text-center text-sm text-charity-neutral-600 mb-2">Or use one-time token</div>
            <div className="flex gap-2">
              <input className="border rounded px-3 py-2 flex-1" placeholder="X-Admin-Token" value={tokenInput} onChange={(e) => setTokenInput(e.target.value)} />
              <button className="px-4 py-2 bg-charity-green-600 text-white rounded" onClick={saveToken}>Continue</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading || !data) return <div className="p-6">Loading...</div>;

  const metrics = [
    { label: "Hero Slides", value: data.hero.images.length, color: "bg-charity-orange-600" },
    { label: "Children", value: data.children.length, color: "bg-charity-green-600" },
    { label: "Upcoming Events", value: data.upcomingEvents.length, color: "bg-emerald-600" },
    { label: "Past Events", value: data.pastEvents.length, color: "bg-slate-600" },
    { label: "Subscriptions", value: data.subscriptions.length, color: "bg-indigo-600" },
    { label: "Messages", value: data.messages.length, color: "bg-rose-600" },
  ];

  return (
    <div className="min-h-screen bg-charity-neutral-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-10">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <button className="px-3 py-2 border rounded" onClick={logout}>Logout</button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {metrics.map((m) => (
            <div key={m.label} className="bg-white rounded-xl shadow p-4">
              <div className="text-sm text-charity-neutral-500">{m.label}</div>
              <div className={`mt-2 text-3xl font-bold text-white rounded-lg inline-block px-3 ${m.color}`}>{m.value}</div>
            </div>
          ))}
        </div>

        <Section title="Hero Carousel">
          <HeroEditor images={data.hero.images} onSave={(imgs) => updateSection("hero", { images: imgs })} />
        </Section>

        <Section title="About Section">
          <AboutEditor about={data.about} onSave={(about) => updateSection("about", about)} />
        </Section>

        <Section title="Help Items">
          <HelpItemsEditor items={data.help} onSave={(items) => updateSection("help", items)} />
        </Section>

        <Section title="Stats">
          <StatsEditor items={data.stats} onSave={(items) => updateSection("stats", items)} />
        </Section>

        <Section title="Featured Event">
          <EventEditor event={data.featuredEvent} onSave={(event) => updateSection("featuredEvent", event)} />
        </Section>

        <Section title="Upcoming Events">
          <EventsListEditor list={data.upcomingEvents} onSave={(list) => updateSection("upcomingEvents", list as any)} />
        </Section>

        <Section title="Past Events">
          <EventsListEditor list={data.pastEvents} onSave={(list) => updateSection("pastEvents", list as any)} />
        </Section>

        <Section title="Featured Blog">
          <BlogEditor post={data.featuredBlog} onSave={(post) => updateSection("featuredBlog", post)} />
        </Section>

        <Section title="Children (Full List)">
          <ChildrenEditor childrenList={data.children} onSave={(children) => updateSection("children", children)} />
        </Section>

        <Section title="Email Subscriptions">
          <SubscriptionsViewer items={data.subscriptions} />
        </Section>

        <Section title="Contact Messages">
          <MessagesViewer items={data.messages} />
        </Section>
      </div>
      <Footer />
    </div>
  );
}

function HeroEditor({ images, onSave }: { images: HeroImage[]; onSave: (imgs: HeroImage[]) => void }) {
  const [list, setList] = useState<HeroImage[]>(images);
  return (
    <div>
      <div className="space-y-3">
        {list.map((img, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
            <input className="border rounded px-3 py-2" value={img.src} onChange={(e) => {
              const next = [...list]; next[i] = { ...next[i], src: e.target.value }; setList(next);
            }} placeholder="Image URL" />
            <input className="border rounded px-3 py-2" value={img.quote} onChange={(e) => {
              const next = [...list]; next[i] = { ...next[i], quote: e.target.value }; setList(next);
            }} placeholder="Quote" />
            <div className="md:col-span-2 flex justify-end">
              <button className="text-red-600" onClick={() => setList(list.filter((_, idx) => idx !== i))}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <button className="px-3 py-2 border rounded" onClick={() => setList([...list, { src: "", quote: "" }])}>Add Slide</button>
        <button className="px-4 py-2 bg-charity-green-600 text-white rounded" onClick={() => onSave(list)}>Save</button>
      </div>
    </div>
  );
}

function AboutEditor({ about, onSave }: { about: SiteContent["about"]; onSave: (about: SiteContent["about"]) => void }) {
  const [form, setForm] = useState(about);
  return (
    <div className="space-y-3">
      <input className="border rounded px-3 py-2 w-full" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} placeholder="Image URL" />
      <input className="border rounded px-3 py-2 w-full" value={form.heading} onChange={(e) => setForm({ ...form, heading: e.target.value })} placeholder="Heading" />
      <textarea className="border rounded px-3 py-2 w-full" rows={3} value={form.paragraph1} onChange={(e) => setForm({ ...form, paragraph1: e.target.value })} placeholder="Paragraph 1" />
      <textarea className="border rounded px-3 py-2 w-full" rows={3} value={form.paragraph2} onChange={(e) => setForm({ ...form, paragraph2: e.target.value })} placeholder="Paragraph 2" />
      <button className="px-4 py-2 bg-charity-green-600 text-white rounded" onClick={() => onSave(form)}>Save</button>
    </div>
  );
}

function HelpItemsEditor({ items, onSave }: { items: HelpItem[]; onSave: (items: HelpItem[]) => void }) {
  const [list, setList] = useState(items);
  return (
    <div>
      <div className="space-y-3">
        {list.map((it, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
            <input className="border rounded px-3 py-2" value={it.icon} onChange={(e) => { const next = [...list]; next[i] = { ...next[i], icon: e.target.value }; setList(next); }} placeholder="Icon (TrendingUp, Droplets, GraduationCap, Utensils)" />
            <input className="border rounded px-3 py-2" value={it.title} onChange={(e) => { const next = [...list]; next[i] = { ...next[i], title: e.target.value }; setList(next); }} placeholder="Title" />
            <input className="border rounded px-3 py-2" value={it.description} onChange={(e) => { const next = [...list]; next[i] = { ...next[i], description: e.target.value }; setList(next); }} placeholder="Description" />
            <div className="md:col-span-3 flex justify-end">
              <button className="text-red-600" onClick={() => setList(list.filter((_, idx) => idx !== i))}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <button className="px-3 py-2 border rounded" onClick={() => setList([...list, { icon: "TrendingUp", title: "", description: "" }])}>Add Item</button>
        <button className="px-4 py-2 bg-charity-green-600 text-white rounded" onClick={() => onSave(list)}>Save</button>
      </div>
    </div>
  );
}

function StatsEditor({ items, onSave }: { items: StatItem[]; onSave: (items: StatItem[]) => void }) {
  const [list, setList] = useState(items);
  return (
    <div>
      <div className="space-y-3">
        {list.map((it, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
            <input className="border rounded px-3 py-2" value={it.number} onChange={(e) => { const next = [...list]; next[i] = { ...next[i], number: e.target.value }; setList(next); }} placeholder="Number" />
            <input className="border rounded px-3 py-2" value={it.label} onChange={(e) => { const next = [...list]; next[i] = { ...next[i], label: e.target.value }; setList(next); }} placeholder="Label" />
            <div className="md:col-span-2 flex justify-end">
              <button className="text-red-600" onClick={() => setList(list.filter((_, idx) => idx !== i))}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <button className="px-3 py-2 border rounded" onClick={() => setList([...list, { number: "0", label: "" }])}>Add Stat</button>
        <button className="px-4 py-2 bg-charity-green-600 text-white rounded" onClick={() => onSave(list)}>Save</button>
      </div>
    </div>
  );
}

function EventEditor({ event, onSave }: { event: SiteContent["featuredEvent"]; onSave: (ev: SiteContent["featuredEvent"]) => void }) {
  const [form, setForm] = useState(event);
  return (
    <div className="space-y-3">
      {Object.entries(form).map(([key, val]) => (
        Array.isArray(val) ? (
          <ArrayEditor key={key} title={key} values={val as any[]} onChange={(arr) => setForm({ ...form, [key]: arr } as any)} />
        ) : typeof val === "object" && val ? (
          <ArrayEditor key={key} title={key} values={(val as any[])} onChange={(arr) => setForm({ ...form, [key]: arr } as any)} />
        ) : (
          <input key={key} className="border rounded px-3 py-2 w-full" value={String(val)} onChange={(e) => setForm({ ...form, [key]: e.target.value } as any)} placeholder={key} />
        )
      ))}
      <button className="px-4 py-2 bg-charity-green-600 text-white rounded" onClick={() => onSave(form)}>Save</button>
    </div>
  );
}

function BlogEditor({ post, onSave }: { post: SiteContent["featuredBlog"]; onSave: (p: SiteContent["featuredBlog"]) => void }) {
  const [form, setForm] = useState(post);
  return (
    <div className="space-y-3">
      <input className="border rounded px-3 py-2 w-full" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Title" />
      <input className="border rounded px-3 py-2 w-full" value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} placeholder="Excerpt" />
      <ArrayEditor title="content" values={form.content} onChange={(arr) => setForm({ ...form, content: arr })} />
      <input className="border rounded px-3 py-2 w-full" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} placeholder="Image" />
      <input className="border rounded px-3 py-2 w-full" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} placeholder="Category" />
      <input className="border rounded px-3 py-2 w-full" value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} placeholder="Author" />
      <input className="border rounded px-3 py-2 w-full" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} placeholder="Date" />
      <input className="border rounded px-3 py-2 w-full" value={form.readTime} onChange={(e) => setForm({ ...form, readTime: e.target.value })} placeholder="Read time" />
      <input className="border rounded px-3 py-2 w-full" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} placeholder="Slug" />
      <button className="px-4 py-2 bg-charity-green-600 text-white rounded" onClick={() => onSave(form)}>Save</button>
    </div>
  );
}

function ChildrenEditor({ childrenList, onSave }: { childrenList: SiteContent["children"]; onSave: (arr: SiteContent["children"]) => void }) {
  const [list, setList] = useState(childrenList);
  return (
    <div>
      <p className="text-sm text-charity-neutral-600 mb-3">Edit children data. Use the Children page to display details.</p>
      <div className="space-y-6">
        {list.map((c, i) => (
          <div key={c.id} className="border rounded p-4 bg-charity-neutral-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input className="border rounded px-3 py-2" value={c.name} onChange={(e) => { const next=[...list]; next[i] = { ...next[i], name: e.target.value }; setList(next); }} placeholder="Name" />
              <input className="border rounded px-3 py-2" value={c.image} onChange={(e) => { const next=[...list]; next[i] = { ...next[i], image: e.target.value }; setList(next); }} placeholder="Image" />
              <input className="border rounded px-3 py-2" type="number" value={c.age} onChange={(e) => { const next=[...list]; next[i] = { ...next[i], age: Number(e.target.value) }; setList(next); }} placeholder="Age" />
              <input className="border rounded px-3 py-2" value={c.location} onChange={(e) => { const next=[...list]; next[i] = { ...next[i], location: e.target.value }; setList(next); }} placeholder="Location" />
              <input className="border rounded px-3 py-2" value={c.school} onChange={(e) => { const next=[...list]; next[i] = { ...next[i], school: e.target.value }; setList(next); }} placeholder="School" />
              <input className="border rounded px-3 py-2" value={c.grade} onChange={(e) => { const next=[...list]; next[i] = { ...next[i], grade: e.target.value }; setList(next); }} placeholder="Grade" />
              <textarea className="border rounded px-3 py-2 md:col-span-2" rows={2} value={c.story} onChange={(e) => { const next=[...list]; next[i] = { ...next[i], story: e.target.value }; setList(next); }} placeholder="Story" />
              <ArrayEditor title="needs" values={c.needs} onChange={(arr) => { const next=[...list]; next[i] = { ...next[i], needs: arr as string[] }; setList(next); }} />
              <ArrayEditor title="interests" values={c.interests} onChange={(arr) => { const next=[...list]; next[i] = { ...next[i], interests: arr as string[] }; setList(next); }} />
              <ArrayEditor title="achievements" values={c.achievements || []} onChange={(arr) => { const next=[...list]; next[i] = { ...next[i], achievements: arr as string[] }; setList(next); }} />
              <input className="border rounded px-3 py-2" value={c.family} onChange={(e) => { const next=[...list]; next[i] = { ...next[i], family: e.target.value }; setList(next); }} placeholder="Family" />
              <input className="border rounded px-3 py-2" value={c.dreamJob} onChange={(e) => { const next=[...list]; next[i] = { ...next[i], dreamJob: e.target.value }; setList(next); }} placeholder="Dream Job" />
              <input className="border rounded px-3 py-2" type="number" value={c.monthlyNeed} onChange={(e) => { const next=[...list]; next[i] = { ...next[i], monthlyNeed: Number(e.target.value) }; setList(next); }} placeholder="Monthly Need (KES)" />
              <label className="flex items-center gap-2"><input type="checkbox" checked={c.sponsored} onChange={(e) => { const next=[...list]; next[i] = { ...next[i], sponsored: e.target.checked }; setList(next); }} /> Sponsored</label>
            </div>
            <div className="mt-2 text-right"><button className="text-red-600" onClick={() => setList(list.filter((_, idx) => idx !== i))}>Remove</button></div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <button className="px-3 py-2 border rounded" onClick={() => setList([...list, { id: crypto.randomUUID(), name: "", age: 0, location: "", school: "", grade: "", story: "", needs: [], image: "", monthlyNeed: 0, sponsored: false, interests: [], family: "", dreamJob: "" } as any])}>Add Child</button>
        <button className="px-4 py-2 bg-charity-green-600 text-white rounded" onClick={() => onSave(list)}>Save</button>
      </div>
    </div>
  );
}

function ArrayEditor({ title, values, onChange }: { title: string; values: any[]; onChange: (v: any[]) => void }) {
  const [list, setList] = useState<any[]>(values || []);
  useEffect(() => setList(values || []), [values]);
  return (
    <div className="border rounded p-3 bg-white/50">
      <div className="font-medium mb-2 text-charity-neutral-700">{title}</div>
      <div className="space-y-2">
        {list.map((v, i) => (
          <div key={i} className="flex gap-2">
            <input className="border rounded px-3 py-2 flex-1" value={String(v)} onChange={(e) => { const next=[...list]; next[i] = e.target.value; setList(next); }} />
            <button className="text-red-600" onClick={() => setList(list.filter((_, idx) => idx !== i))}>Remove</button>
          </div>
        ))}
      </div>
      <div className="mt-2 flex gap-2">
        <button className="px-3 py-2 border rounded" onClick={() => setList([...list, ""]) }>Add</button>
        <button className="px-3 py-2 bg-charity-orange-600 text-white rounded" onClick={() => onChange(list)}>Apply</button>
      </div>
    </div>
  );
}
