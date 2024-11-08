import { SectionHeading } from '../../components/Headings';
import Button from '../../components/Button'

const Blogs = () => {
  return (
    <section>
        <SectionHeading SectionTitle='Blogs' SectionSubtitle='Latest Posts' ExtraContent={<Button text='View All Blogs' />} />
    </section>
  )
}

export default Blogs;