# 🤝 Contributing to Arogya Care

Thank you for your interest in contributing to **Arogya Care**! We welcome contributions from developers, designers, healthcare professionals, and anyone passionate about improving healthcare accessibility through technology.

## 📋 Table of Contents

- [🌟 Code of Conduct](#-code-of-conduct)
- [🚀 Getting Started](#-getting-started)
- [🔧 Development Setup](#-development-setup)
- [📝 How to Contribute](#-how-to-contribute)
- [🐛 Bug Reports](#-bug-reports)
- [💡 Feature Requests](#-feature-requests)
- [🔄 Pull Request Process](#-pull-request-process)
- [📋 Development Guidelines](#-development-guidelines)
- [🧪 Testing Guidelines](#-testing-guidelines)
- [📚 Documentation](#-documentation)
- [🏷️ Commit Message Guidelines](#️-commit-message-guidelines)
- [🎯 Issue Labels](#-issue-labels)
- [❓ Questions and Support](#-questions-and-support)

## 🌟 Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before contributing.

**Key Points:**
- Be respectful and inclusive
- Focus on constructive feedback
- Help create a welcoming environment
- Respect healthcare data privacy and security

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.0 or higher
- **npm** 8.0 or higher
- **Git** for version control
- **MongoDB Atlas** account or local MongoDB
- Basic knowledge of React, Node.js, and healthcare workflows

### Fork and Clone
```bash
# Fork the repository on GitHub
# Then clone your fork
git clone https://github.com/YOUR_USERNAME/Production-Project-Arogya-Care-main.git
cd Production-Project-Arogya-Care-main

# Add upstream remote
git remote add upstream https://github.com/Parthasarathirout/Production-Project-Arogya-Care-main.git
```

## 🔧 Development Setup

### 1. Install Dependencies
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client-new
npm install
cd ..
```

### 2. Environment Configuration
```bash
# Copy environment template
cp .env.example .env

# Edit .env with your configuration
# At minimum, set MONGO_URI and JWT_SECRET
```

### 3. Database Setup
```bash
# Seed the database with sample data
npm run seed
```

### 4. Start Development Servers
```bash
# Start both frontend and backend
npm run dev

# Or start individually
npm run server    # Backend (port 8080)
npm run client    # Frontend (port 3000)
```

## 📝 How to Contribute

### Types of Contributions Welcome

#### 🐛 **Bug Fixes**
- Fix existing bugs
- Improve error handling
- Performance optimizations

#### ✨ **Features**
- New healthcare features
- UI/UX improvements
- API enhancements
- Integration capabilities

#### 📚 **Documentation**
- API documentation
- Code comments
- User guides
- Healthcare workflow documentation

#### 🧪 **Testing**
- Unit tests
- Integration tests
- End-to-end tests
- Healthcare scenario testing

#### 🎨 **Design**
- UI components
- Accessibility improvements
- Responsive design
- Healthcare-specific UI patterns

## 🐛 Bug Reports

### Before Submitting a Bug Report
1. **Search existing issues** to avoid duplicates
2. **Check latest version** - bug might be already fixed
3. **Test in different browsers** (for frontend bugs)
4. **Gather system information**

### Bug Report Template
```markdown
**Bug Description**
A clear description of the bug.

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior**
What you expected to happen.

**Actual Behavior**
What actually happened.

**Screenshots**
Add screenshots if applicable.

**Environment**
- OS: [e.g., Windows 11, macOS 13]
- Browser: [e.g., Chrome 119, Firefox 118]
- Node.js version: [e.g., 18.17.0]
- Version: [e.g., 1.0.0]

**Healthcare Context**
- User role: [patient/doctor/admin]
- Feature area: [appointments/dashboard/profile]
- Data sensitivity: [PHI involved? Yes/No]

**Additional Context**
Any other relevant information.
```

## 💡 Feature Requests

### Feature Request Template
```markdown
**Feature Summary**
Brief description of the feature.

**Healthcare Problem**
What healthcare problem does this solve?

**User Story**
As a [patient/doctor/admin], I want [goal] so that [benefit].

**Proposed Solution**
Detailed description of your proposed solution.

**Alternative Solutions**
Other approaches you've considered.

**Healthcare Compliance**
- HIPAA considerations: [Yes/No/Details]
- Data privacy impact: [None/Low/Medium/High]
- Security requirements: [List any specific requirements]

**Additional Context**
Mockups, examples, or references.
```

## 🔄 Pull Request Process

### 1. Create Feature Branch
```bash
# Sync with upstream
git fetch upstream
git checkout main
git merge upstream/main

# Create feature branch
git checkout -b feature/amazing-healthcare-feature
# or
git checkout -b fix/appointment-booking-bug
```

### 2. Make Changes
- Follow our coding standards
- Write tests for new features
- Update documentation
- Ensure HIPAA compliance for healthcare data

### 3. Test Your Changes
```bash
# Run backend tests
npm test

# Run frontend tests
cd client-new
npm test
cd ..

# Test full application
npm run dev
```

### 4. Commit Changes
```bash
git add .
git commit -m "feat: add appointment reminder notifications"
```

### 5. Push and Create PR
```bash
git push origin feature/amazing-healthcare-feature
```

Then create a Pull Request on GitHub with:
- Clear title and description
- Reference related issues
- Include screenshots for UI changes
- Mention healthcare compliance considerations

### 6. PR Review Process
- Automated tests must pass
- Code review by maintainers
- Healthcare compliance review (if applicable)
- Manual testing for critical features
- Documentation review

## 📋 Development Guidelines

### Code Style

#### **JavaScript/React**
```javascript
// Use ES6+ features
const getUserAppointments = async (userId) => {
  try {
    const appointments = await Appointment.find({ patientId: userId });
    return appointments;
  } catch (error) {
    logger.error('Error fetching appointments:', error);
    throw error;
  }
};

// Use descriptive variable names
const isAppointmentWithinBusinessHours = (appointmentTime) => {
  // Implementation
};

// Add JSDoc comments for healthcare-specific functions
/**
 * Validates patient eligibility for appointment booking
 * @param {string} patientId - Patient identifier
 * @param {string} doctorId - Doctor identifier
 * @param {Date} appointmentDate - Requested appointment date
 * @returns {Promise<boolean>} Eligibility status
 */
```

#### **CSS/Tailwind**
```css
/* Use semantic class names */
.appointment-card {
  @apply bg-white rounded-lg shadow-md p-4 border border-gray-200;
}

/* Follow healthcare accessibility standards */
.critical-alert {
  @apply bg-red-100 border-red-500 text-red-700;
  /* Ensure WCAG AA contrast ratio */
}
```

### Healthcare-Specific Guidelines

#### **Data Handling**
```javascript
// Always validate healthcare data
const validatePatientData = (data) => {
  // Implement strict validation
  // Remove or mask sensitive information in logs
};

// Use appropriate error messages
const HEALTHCARE_ERRORS = {
  PATIENT_NOT_FOUND: 'Patient record not accessible',
  INVALID_APPOINTMENT: 'Invalid appointment request',
  // Avoid exposing sensitive information
};
```

#### **Privacy Compliance**
- Never log sensitive patient information
- Implement proper data encryption
- Use secure communication protocols
- Follow HIPAA guidelines for data handling

### File Organization
```
src/
├── components/
│   ├── common/           # Reusable components
│   ├── forms/           # Healthcare forms
│   ├── charts/          # Health data visualization
│   └── modals/          # Healthcare-specific modals
├── pages/
│   ├── patient/         # Patient-specific pages
│   ├── doctor/          # Doctor-specific pages
│   └── admin/           # Admin pages
├── hooks/
│   ├── useAuth.js       # Authentication
│   ├── useHealthData.js # Health data management
│   └── useAppointments.js # Appointment management
└── utils/
    ├── healthValidation.js # Healthcare data validation
    ├── dateUtils.js      # Date/time utilities
    └── apiClient.js      # API communication
```

## 🧪 Testing Guidelines

### Test Categories

#### **Unit Tests**
```javascript
// Test healthcare business logic
describe('Appointment Validation', () => {
  test('should validate appointment within business hours', () => {
    const appointmentTime = new Date('2024-01-15T10:00:00Z');
    expect(isWithinBusinessHours(appointmentTime)).toBe(true);
  });

  test('should reject appointment outside business hours', () => {
    const appointmentTime = new Date('2024-01-15T22:00:00Z');
    expect(isWithinBusinessHours(appointmentTime)).toBe(false);
  });
});
```

#### **Integration Tests**
```javascript
// Test healthcare workflows
describe('Appointment Booking Flow', () => {
  test('patient can book available appointment slot', async () => {
    // Test complete booking workflow
  });

  test('doctor receives appointment notification', async () => {
    // Test notification system
  });
});
```

#### **Healthcare Scenario Tests**
- Test emergency appointment scenarios
- Validate prescription workflows
- Test patient data privacy scenarios
- Verify HIPAA compliance scenarios

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run healthcare-specific tests
npm run test:healthcare
```

## 📚 Documentation

### Code Documentation
- Add JSDoc comments for all public functions
- Document healthcare-specific business rules
- Include usage examples for complex functions
- Document API endpoints with OpenAPI/Swagger

### README Updates
- Update features list for new capabilities
- Add setup instructions for new dependencies
- Include healthcare-specific configuration notes
- Update screenshots for UI changes

### Healthcare Documentation
- Document compliance requirements
- Include healthcare workflow diagrams
- Document data privacy measures
- Include accessibility features

## 🏷️ Commit Message Guidelines

### Format
```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (no logic change)
- **refactor**: Code refactoring
- **test**: Test additions or modifications
- **chore**: Build process or auxiliary tool changes
- **security**: Security improvements
- **accessibility**: Accessibility improvements

### Healthcare-Specific Scopes
- **appointments**: Appointment management
- **patients**: Patient-related features
- **doctors**: Doctor-related features
- **auth**: Authentication and authorization
- **privacy**: Data privacy and security
- **compliance**: Healthcare compliance features
- **notifications**: Notification system
- **analytics**: Healthcare analytics

### Examples
```bash
feat(appointments): add recurring appointment booking
fix(privacy): resolve patient data exposure in logs
docs(api): update appointment booking endpoint documentation
security(auth): implement rate limiting for login attempts
accessibility(forms): add ARIA labels to patient forms
```

## 🎯 Issue Labels

### Priority Labels
- `priority: critical` - Security vulnerabilities, data breaches
- `priority: high` - Major features, important bugs
- `priority: medium` - Standard features and improvements
- `priority: low` - Minor enhancements

### Type Labels
- `type: bug` - Something isn't working
- `type: feature` - New functionality
- `type: enhancement` - Improvement to existing feature
- `type: documentation` - Documentation improvements
- `type: security` - Security-related issues

### Healthcare Labels
- `healthcare: compliance` - HIPAA/healthcare compliance
- `healthcare: privacy` - Patient privacy concerns
- `healthcare: workflow` - Healthcare workflow improvements
- `healthcare: accessibility` - Healthcare accessibility
- `healthcare: emergency` - Emergency/urgent care features

### Status Labels
- `status: needs-review` - Awaiting review
- `status: in-progress` - Currently being worked on
- `status: blocked` - Blocked by dependencies
- `status: needs-testing` - Requires testing

## ❓ Questions and Support

### Getting Help

#### **Development Questions**
- Check existing [GitHub Discussions](https://github.com/Parthasarathirout/Production-Project-Arogya-Care-main/discussions)
- Create a new discussion for general questions
- Tag with appropriate labels

#### **Healthcare-Specific Questions**
- For healthcare workflow questions, tag with `healthcare`
- For compliance questions, tag with `compliance`
- Include relevant healthcare context

#### **Bug Reports**
- Use GitHub Issues for bugs
- Follow the bug report template
- Include steps to reproduce

#### **Feature Requests**
- Use GitHub Issues for features
- Follow the feature request template
- Include healthcare context and compliance considerations

### Response Times
- **Critical issues**: Within 24 hours
- **Bug reports**: Within 48 hours
- **Feature requests**: Within 1 week
- **General questions**: Within 3-5 days

### Community Guidelines
- Be respectful and professional
- Focus on healthcare improvement goals
- Respect patient privacy in all discussions
- Provide constructive feedback
- Help others learn and contribute

---

## 🙏 Thank You

Thank you for contributing to **Arogya Care**! Your contributions help make healthcare more accessible and efficient for everyone. Together, we're building a platform that can make a real difference in people's lives.

### Recognition
All contributors will be recognized in our:
- Contributors section in README.md
- Release notes for significant contributions
- Annual contributor appreciation posts

### Stay Connected
- ⭐ Star the repository to stay updated
- 👀 Watch for notifications
- 🐦 Follow project updates
- 💬 Join our community discussions

---

<div align="center">
  <p>
    <strong>Happy Contributing! 🎉</strong>
  </p>
  <p>
    <em>Making healthcare accessible through code</em>
  </p>
</div>