import { Toaster } from 'sonner';

import { PlateEditor } from '@/components/editor/plate-editor';
import Navbar from '@/components/navbar/Navbar';
import { cn } from '@/lib/utils';

export default function Page() {
  return (
    <section>
      
      <Navbar />
      <div className="mt-24 p-8">
        <div className='border-2 p-1 rounded-3xl'>
          <PlateEditor />

        </div>
      

      <Toaster />
    </div>

    </section>
    
  );
}
