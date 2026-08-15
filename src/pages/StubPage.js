import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardBody, Button } from '@/components';
import { useUIStore } from '@/store/uiStore';
export const StubPage = ({ title, description, icon }) => {
    const { setCurrentPage } = useUIStore();
    return (_jsx("div", { className: "container-normal py-12 px-4 md:px-0 flex items-center justify-center min-h-[calc(100vh-200px)]", children: _jsx(Card, { className: "text-center max-w-md", children: _jsxs(CardBody, { className: "space-y-4", children: [_jsx("div", { className: "text-6xl", children: icon }), _jsx("h1", { className: "text-2xl font-bold text-primary-800", children: title }), _jsx("p", { className: "text-neutral-text-secondary", children: description }), _jsx("div", { className: "flex gap-3 justify-center pt-4", children: _jsx(Button, { variant: "secondary", onClick: () => setCurrentPage('dashboard'), children: "\u2190 Retour" }) })] }) }) }));
};
//# sourceMappingURL=StubPage.js.map