import * as React from 'react';

export interface Post {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}

export interface InjectedProps {
  data: Post;
}

interface HocState extends InjectedProps {
  isLoading: boolean;
}

export interface EnhancedComponent extends React.Component {
  fetchData(url: string): Promise<void>;
  componentDidMount(): Promise<void>;
}

export default function withData<P>(WrappedComponent: React.ComponentType<P & InjectedProps>, dataUrl: string) {
  return class extends React.Component<P, HocState> implements EnhancedComponent {
    readonly state: HocState = { isLoading: true, data: {} };

    fetchData = async (url: string) => {
      const response = await fetch(url);
      const data = (await response.json()) as Post;
      this.setState({ isLoading: false, data });
    };

    async componentDidMount() {
      await this.fetchData(dataUrl);
    }

    render() {
      const { isLoading, data } = this.state;
      return isLoading ? 'Loading' : <WrappedComponent {...this.props} data={data} />;
    }
  };
}
