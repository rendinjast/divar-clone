import { CategoryType } from '../types';
const CategoryHelper = (categories: CategoryType[], slug: string) => {
  if (categories.length < 1) return;
  let current = categories.find((c) => c.slug === slug);

  if (!current) return;
  let children = categories.filter((C) => C.parent_slug == current?.slug);

  if (children.length < 1) {
    current = categories.find((c) => c.slug === current?.parent_slug);
    children = categories.filter((C) => C.parent_slug == current?.slug);
  }
  const isFinal = !categories.find((x) => x.parent_slug === children[0].slug);

  const tree: CategoryType[] = [];
  // if (current?.parent_slug === 'root')
  //   tree.push(categories.find((x) => x.slug === current?.parent_slug)!);
  // if (tree[0]?.parent_slug) tree.push(categories.find((x) => x.slug === tree[0]?.parent_slug)!);

  if (current?.parent_slug) {
    let x1 = categories.find((x) => x.slug === current?.parent_slug);
    if (x1?.slug === 'root') {
      x1 = current;
      if (x1) tree.push(x1);
    } else {
      if (x1) tree.push(x1);
      let x2 = categories.find((x) => x.slug === x1?.parent_slug);
      if (x2?.parent_slug !== 'root') x2 = current;
      if (x2) tree.push(x2);
    }
  }
  console.log(tree);
  if (!tree) return;
  return { ...current, children, isFinal, tree };
};
export default CategoryHelper;
