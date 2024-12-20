type strata = {
  data: string;
  level: number;
  uid: string;
  visible: boolean;
};

type ExplorerProps = {
  data: string[];
  onSelect: (element: strata) => void;
};

type RecursiveSegmentProps = {
  node: Tree<string>;
  action: (data: strata) => void;
};

type SegmentProps = {
  data: strata;
  action: (open: boolean) => void;
};

type SegmentStyle = {
  $level: number;
  $visible: boolean;
};

type ChevronProps = {
  open: boolean;
};
